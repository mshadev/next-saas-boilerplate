"use client";

import React, { Children } from "react";

export interface IDropdownProps {
  children?: React.ReactNode | React.ReactNode[];
  caption?: string;
  icon?: React.ReactNode;
}

export default function Dropdown({
  children,
  icon,
  caption = "Click",
}: IDropdownProps) {
  const menuRender = Children.map(children, (item, key) => (
    <li key={key}>{item}</li>
  ));

  return (
    <div className="dropdown dropdown-end">
      <button tabIndex={0} role="button" className="btn m-1">
        {caption && icon}
      </button>

      {children && (
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-box w-40 m-1"
        >
          {menuRender}
        </ul>
      )}
    </div>
  );
}
