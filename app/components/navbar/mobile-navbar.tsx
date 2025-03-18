"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "flowbite-react";

export function MobileNavbar() {
  return (
    <Dropdown
      label=""
      dismissOnClick={false}
      renderTrigger={() => (
        <FontAwesomeIcon icon={faBars} width="24px" height="24px" className=" size-6 cursor-pointer" />
      )}
      className="z-10 bg-white"
    >
      <Dropdown.Item>Về chúng tôi</Dropdown.Item>
      <Dropdown.Item>Giải pháp</Dropdown.Item>
      <Dropdown.Item>Tài nguyên</Dropdown.Item>
      <Dropdown.Item>Liên hệ</Dropdown.Item>
    </Dropdown>
  );
}
