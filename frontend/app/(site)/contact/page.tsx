// "use client";
// import Image from "next/image";
// import { useState } from "react";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Message sent!");
//   };

//   return (
//     <section className="w-full min-h-screen flex poppins">
//       <div className="w-1/2 flex items-center justify-center bg-white px-16">
//         <div className="w-full max-w-md">
//           <h1 className="text-4xl font-semibold mb-10">
//             Get in Touch
//           </h1>
//           <form onSubmit={handleSubmit} className="flex flex-col gap-6">
//             {/* Name */}
//             <div>
//               <label className="text-sm mb-1 block">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full border-b border-black outline-none py-2"
//                 required/>
//             </div>
//             {/* Email */}
//             <div>
//               <label className="text-sm mb-1 block">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full border-b border-black outline-none py-2"
//                 required/>
//             </div>
//             {/* Message */}
//             <div>
//               <label className="text-sm mb-1 block">Message</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full border-b border-black outline-none py-2 resize-none"
//                 rows={4}
//                 required/>
//             </div>
//             {/* Submit Button */}
//             <div className="flex justify-center mt-4">
//               <button type="submit" className="w-48 bg-black text-white border border-white py-3
//                hover:bg-white hover:text-black hover:border-black transition cursor-pointer">
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <div className="w-1/2 relative">
//         <Image
//           src="/watch/w29.jpg" 
//           alt="contact image"
//           fill
//           className="object-cover"/>
//       </div>
//     </section>
//   );
// }







// "use client";
// import Image from "next/image";
// import { useState } from "react";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   // handle input change
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // handle submit
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       const res = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (data.success) {
//         alert("Message Sent ✅");
//         setFormData({
//           name: "",
//           email: "",
//           message: "",
//         });
//       } else {
//         alert("Something went wrong ❌");
//       }
//     } catch (error) {
//       console.log(error);
//       alert("Server error ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="w-full min-h-screen flex poppins">
//       {/* LEFT SIDE (FORM) */}
//       <div className="w-1/2 flex items-center justify-center bg-white px-16">
//         <div className="w-full max-w-md">
//           <h1 className="text-4xl font-semibold mb-10">
//             Get in Touch
//           </h1>

//           <form onSubmit={handleSubmit} className="flex flex-col gap-6">
//             {/* Name */}
//             <div>
//               <label className="text-sm mb-1 block">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full border-b border-black outline-none py-2"
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="text-sm mb-1 block">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full border-b border-black outline-none py-2"
//                 required
//               />
//             </div>

//             {/* Message */}
//             <div>
//               <label className="text-sm mb-1 block">Message</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full border-b border-black outline-none py-2 resize-none"
//                 rows={4}
//                 required
//               />
//             </div>

//             {/* Button */}
//             <div className="flex justify-center mt-4">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-48 bg-black text-white border border-white py-3
//                 hover:bg-white hover:text-black hover:border-black transition cursor-pointer disabled:opacity-50"
//               >
//                 {loading ? "Sending..." : "Send Message"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* RIGHT SIDE (IMAGE) */}
//       <div className="w-1/2 relative">
//         <Image
//           src="/watch/w29.jpg"
//           alt="contact image"
//           fill
//           className="object-cover"
//         />
//       </div>
//     </section>
//   );
// }



"use client";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

export default function ContactPage() {
  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Loading state for button
  const [loading, setLoading] = useState(false);

  // Toast notification state
  const [toast, setToast] = useState<string | null>(null);
  const [type, setType] = useState<"success" | "error">("success");

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setType("success");
        setToast("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setType("error");
        setToast("Something went wrong ❌");
      }

      // Hide toast after 3 seconds
      setTimeout(() => setToast(null), 3000);
    } catch (error) {
      console.log(error);
      setType("error");
      setToast("Server error ❌");
      setTimeout(() => setToast(null), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen flex poppins">
      {/* LEFT SIDE (FORM) */}
      <div className="w-1/2 flex items-center justify-center bg-white px-16">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-semibold mb-10">Get in Touch</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name */}
            <div>
              <label className="text-sm mb-1 block">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b border-black outline-none py-2"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm mb-1 block">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-black outline-none py-2"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm mb-1 block">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border-b border-black outline-none py-2 resize-none"
                rows={4}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-48 bg-black text-white border border-white py-3
                hover:bg-white hover:text-black hover:border-black transition cursor-pointer disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE (IMAGE) */}
      <div className="w-1/2 relative">
        <Image
          src="/watch/w29.jpg"
          alt="contact image"
          fill
          className="object-cover"
        />
      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white border shadow-xl px-5 py-3 z-50 rounded-lg">
          {type === "success" ? (
            <AiOutlineCheckCircle className="text-green-500 text-2xl" />
          ) : (
            <AiOutlineCloseCircle className="text-red-500 text-2xl" />
          )}
          <p className="text-sm">{toast}</p>
        </div>
      )}
    </section>
  );
}