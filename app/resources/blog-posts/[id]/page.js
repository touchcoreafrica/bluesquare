"use client";

import Footer from "@/components/Footer/Footer";
import BlogContentSection from "@/components/sections/BlogContentSection";
import BlogSuggestionSection from "@/components/sections/BlogSuggestionSection";
import React from "react";

export default function BlogPage() {
  return (
    <div className={Classname.container}>
      {/* <Header /> */}
      <BlogContentSection />
      <BlogSuggestionSection />
      {/* <MailingList /> */}
      <Footer />
    </div>
  );
}

const Classname = {
  container: "bg-white relative w-screen min-h-screen flex flex-col font-main",
};
