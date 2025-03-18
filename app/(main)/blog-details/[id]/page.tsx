"use client";

import BlogItem from "@/components/blog-item";
import Breadcrumb from "@/components/fields/breadcrumb";
import { useRef } from "react";
import LeftBlogDetails from "../_components/left-blog-details";
import RightBlogDetails from "../_components/right-blog-details";
import SocialGroup from "../_components/social-group";

const BlogDetails = () => {
  const sections = {
    s1: useRef<HTMLParagraphElement>(null),
    s2: useRef<HTMLParagraphElement>(null),
    s3: useRef<HTMLParagraphElement>(null),
    s31: useRef<HTMLParagraphElement>(null),
    s32: useRef<HTMLParagraphElement>(null),
    s33: useRef<HTMLParagraphElement>(null),
    s34: useRef<HTMLParagraphElement>(null),
    s35: useRef<HTMLParagraphElement>(null),
    s4: useRef<HTMLParagraphElement>(null),
    s41: useRef<HTMLParagraphElement>(null),
    s42: useRef<HTMLParagraphElement>(null),
    s43: useRef<HTMLParagraphElement>(null),
    s44: useRef<HTMLParagraphElement>(null),
    s45: useRef<HTMLParagraphElement>(null),
    s5: useRef<HTMLParagraphElement>(null),
    s51: useRef<HTMLParagraphElement>(null),
    s52: useRef<HTMLParagraphElement>(null),
    s53: useRef<HTMLParagraphElement>(null),
    s54: useRef<HTMLParagraphElement>(null),
    s55: useRef<HTMLParagraphElement>(null),
    s6: useRef<HTMLParagraphElement>(null),
    s7: useRef<HTMLParagraphElement>(null),
    s8: useRef<HTMLParagraphElement>(null),
  };

  return (
    <div className="relative mx-auto mt-12 px-2 md:px-5 max-w-[1440px] lg:px-10 xl:px-0">
      <Breadcrumb
        items={[
          { name: "Trang chủ", href: "#" },
          { name: "Tài nguyên", href: "#" },
          { name: "Blog", href: "#" },
          { name: "Quản lý sản xuất", href: "#", isCurrentPage: true },
        ]}
      />

      <div className="absolute top-[300px] left-[-40px]">
        <SocialGroup />
      </div>

      <div className="mt-[60px] flex-col items-start justify-center lg:flex-row flex lg:gap-6">
        <LeftBlogDetails sections={sections} />
        <RightBlogDetails sections={sections} />
      </div>
      <div className="mt-6 mb-24 grid gap-6">
        <p className="text-2xl md:text-4xl font-extrabold leading-2 capitalize">Bài viết liên quan</p>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
