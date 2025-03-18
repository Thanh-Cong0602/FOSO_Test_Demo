"use client";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BreadcrumbProps {
  items: { name: string; href: string; isCurrentPage?: boolean }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className=" relative z-[-1] flex flex-wrap text-gray-600" aria-label="breadcrumb ">
      <ol className="flex flex-wrap items-center space-x-2">
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex items-center ${item.isCurrentPage ? "opacity-100" : "opacity-50"}`}
          >
            <a
              href={item.href}
              className={`text-sm font-normal leading-[150%] ${
                item.isCurrentPage ? "cursor-default font-semibold text-[#050505]" : "text-[#17181A] hover:underline"
              }`}
            >
              {item.name}
            </a>
            {index < items.length - 1 && (
              <FontAwesomeIcon icon={faChevronRight} className="mx-2 size-4 text-[#17181A]" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
