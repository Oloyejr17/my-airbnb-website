"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PencilIcon, CameraIcon } from "@heroicons/react/24/outline";
import RandomBgWrapper from "@/components/RandomBgWrapper";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [editMode, setEditMode] = useState(false);
  const [profileFile, setProfileFile] = useState<File | null>(null);

  const [form, setForm] = useState({
    name: "",
    bio: "",
    phone: "",
    location: "",
    occupation: "",
    maritalStatus: "",
    social: "",
  });

  // Redirect if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") router.push("/auth/login");
  }, [status, router]);

  // Fetch user from API
  useEffect(() => {
    if (!session?.user?.email) return;

    const fetchUser = async () => {
      try {
        const res = await fetch("/api/user/me");
        const data = await res.json().catch(() => ({}));

        if (!res.ok || data.error) {
          console.error("Failed to fetch user:", data.error);
          setUser({});
          return;
        }

        const safeData = {
          ...data,
          id: data.id?.toString(),
          phone: data.phone?.toString(),
        };

        setUser(safeData);

        setForm({
          name: safeData.name || "",
          bio: safeData.bio || "",
          phone: safeData.phone || "",
          location: safeData.location || "",
          occupation: safeData.occupation || "",
          maritalStatus: safeData.maritalStatus || "",
          social: safeData.social || "",
        });
      } catch (err) {
        console.error("Error fetching user:", err);
        setUser({});
      }
    };

    fetchUser();
  }, [session]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setProfileFile(file);

    if (file && user) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) setUser({ ...user, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    try {
      let imageUrl = user.image;

      if (profileFile) {
        const formData = new FormData();
        formData.append("file", profileFile);

        const uploadRes = await fetch("/api/user/upload", { method: "POST", body: formData });
        const uploadData = await uploadRes.json();
        if (!uploadData.url) throw new Error("Image upload failed");
        imageUrl = uploadData.url;
      }

      const res = await fetch("/api/user/update", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, image: imageUrl }),
      });

      const updated = await res.json();
      setUser({
        ...updated,
        id: updated.id?.toString(),
        phone: updated.phone?.toString(),
      });
      setEditMode(false);
      setProfileFile(null);
    } catch (err) {
      console.error(err);
      alert("Failed to save profile. Try again.");
    }
  };

  if (!user) return <div className="flex items-center justify-center h-screen text-white">Loading...</div>;

  return (
    <RandomBgWrapper>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center space-x-6 mb-8">
          <div className="relative">
            {user.image ? (
              <img src={user.image} alt={user.name ?? "User"} className="w-24 h-24 rounded-full object-cover" />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-600 flex items-center justify-center text-white text-2xl font-bold">
                {user.name ? user.name.split(" ").map((n: any[]) => n[0]).join("").toUpperCase() : "?"}
              </div>
            )}

            {editMode && (
              <label className="absolute bottom-0 right-0 bg-gray-200 p-1 rounded-full cursor-pointer hover:bg-gray-300">
                <CameraIcon className="w-5 h-5 text-gray-700" />
                <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
              </label>
            )}
          </div>

          <div>
            <h1 className="text-2xl font-semibold text-white">{user.name}</h1>
            <p className="text-white">{user.email}</p>
          </div>

          <button
            onClick={() => setEditMode(!editMode)}
            className="ml-auto bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded flex items-center space-x-1"
          >
            <PencilIcon className="w-4 h-4 text-gray-700" />
            <span className="text-gray-700 text-sm">{editMode ? "Cancel" : "Edit"}</span>
          </button>
        </div>

        {/* Profile Form */}
        <div className="bg-white shadow rounded-lg p-6 mb-8 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Profile Details</h2>
          {editMode ? (
            <div className="space-y-3">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full border px-3 py-2 rounded" />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full border px-3 py-2 rounded" />
              <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="w-full border px-3 py-2 rounded" />
              <input name="occupation" value={form.occupation} onChange={handleChange} placeholder="Occupation" className="w-full border px-3 py-2 rounded" />
              <input name="maritalStatus" value={form.maritalStatus} onChange={handleChange} placeholder="Marital Status" className="w-full border px-3 py-2 rounded" />
              <textarea name="bio" value={form.bio} onChange={handleChange} placeholder="Bio / About Me" className="w-full border px-3 py-2 rounded" rows={4} />
              <input name="social" value={form.social} onChange={handleChange} placeholder="Social Links" className="w-full border px-3 py-2 rounded" />
              <button onClick={handleSave} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                Save Changes
              </button>
            </div>
          ) : (
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Name: </span>{user.name}</p>
              <p><span className="font-semibold">Email: </span>{user.email}</p>
              {user.phone && <p><span className="font-semibold">Phone: </span>{user.phone}</p>}
              {user.location && <p><span className="font-semibold">Location: </span>{user.location}</p>}
              {user.occupation && <p><span className="font-semibold">Occupation: </span>{user.occupation}</p>}
              {user.maritalStatus && <p><span className="font-semibold">Marital Status: </span>{user.maritalStatus}</p>}
              {user.bio && <p><span className="font-semibold">About Me: </span>{user.bio}</p>}
              {user.social && <p><span className="font-semibold">Social: </span>{user.social}</p>}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Actions</h2>
          <div className="flex flex-col space-y-2">
            <button onClick={() => signOut({ callbackUrl: "/" })} className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white">
              Logout
            </button>
          </div>
        </div>
      </div>
    </RandomBgWrapper>
  );
}
