"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";

export default function SearchGames(props: React.ComponentProps<"div">) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Function to handle search input change
  // It will update the name query parameter in the URL
  const onChange = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const search = e.target.value;
      const params = new URLSearchParams(searchParams);

      params.set("page", "1");
      if (search) {
        params.set("name", search);
      } else {
        params.delete("name");
      }
      replace(`${pathname}?${params.toString()}`);
    },
    300
  );

  return (
    <div {...props}>
      <input
        type="text"
        placeholder="Search for games"
        className="w-full p-4 border border-gray-200 rounded-md"
        onChange={onChange}
        defaultValue={searchParams.get("name")?.toString()}
      />
    </div>
  );
}
