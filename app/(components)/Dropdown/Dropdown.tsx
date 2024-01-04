"use client";

import React, { Children } from "react";

export interface IDropdownProps {
  children?: React.ReactNode[];
  caption?: string;
}

export default function Dropdown({
  children,
  caption = "Click",
}: IDropdownProps) {
  const menuRender = Children.map(children, (item, key) => (
    <li key={key}>{item}</li>
  ));

  return (
    <div className="dropdown dropdown-end">
      <button tabIndex={0} role="button" className="btn m-1">
        {caption}
      </button>

      {children && (
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {menuRender}
        </ul>
      )}
    </div>
  );
}
