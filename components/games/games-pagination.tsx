"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface GamesPaginationProps {
  totalPages: number;
}

export default function GamesPagination({ totalPages }: GamesPaginationProps) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();
  const currentPage = Number(searchParams.get("page")) || 1;

  const handleChange = (page: number) => {
    const params = new URLSearchParams(searchParams);

    if (page < 1) {
      page = 1;
    }
    if (page > totalPages) {
      page = totalPages;
    }
    params.set("page", page.toString());
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="mt-8 flex justify-center">
      <Pagination currentPage={currentPage} lastPage={totalPages}>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handleChange(currentPage - 1)}
              isActive={currentPage > 1}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                onClick={() => handleChange(page)}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => handleChange(currentPage + 1)}
              isActive={currentPage < totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
