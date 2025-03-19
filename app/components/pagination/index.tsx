"use client";

import { DATA_LIMIT } from "@/constants/number";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";

const Pagination = ({ totalItems = 0, limit = DATA_LIMIT }: { totalItems?: number; limit?: number }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(totalItems / limit);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const onPageChange = (selectedPage: number) => {
    if (selectedPage < 1 || selectedPage > totalPages) return;
    const url = createPageURL(selectedPage);
    router.push(url);
  };

  return (
    <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between">
      <div className="flex w-1/3 justify-start">
        <button
          className="flex items-center gap-2 rounded-lg bg-white-100 px-3 py-2 text-base leading-1.5 text-gray-400 hover:bg-turquoise-200 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="size-4" />
          <p className="hidden md:block">Trang trước</p>
        </button>
      </div>

      <ReactPaginate
        pageCount={totalPages}
        initialPage={currentPage - 1}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        onPageChange={({ selected }) => onPageChange(selected + 1)}
        previousLabel={null}
        nextLabel={null}
        containerClassName="flex items-center space-x-2"
        activeClassName="bg-turquoise-200 text-black-200 rounded-lg"
        breakClassName="px-3 py-2 text-gray-400"
        pageClassName="size-10 flex items-center justify-center text-gray-200 bg-white-100 rounded-lg hover:bg-gray-200"
        disabledClassName="opacity-50 cursor-not-allowed"
        pageLabelBuilder={(page: number) => (
          <div
            className={`flex size-10 items-center justify-center rounded-lg leading-1.5 transition duration-300 ${
              page === currentPage
                ? "bg-turquoise-200 text-base font-semibold text-black-200"
                : "bg-white-200 text-black-200 hover:bg-gray-200"
            }`}
          >
            {page}
          </div>
        )}
      />

      <div className="flex w-1/3 justify-end">
        <button
          className="flex items-center gap-2 rounded-lg bg-white-100 px-3 py-2 text-base leading-1.5 text-gray-400 hover:bg-turquoise-200 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <p className="hidden md:block">Trang kế tiếp</p>
          <FontAwesomeIcon icon={faChevronRight} className="size-4" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
