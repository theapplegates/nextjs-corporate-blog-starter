"use client";

import { FunctionComponent } from "react";
import { config } from "../config";
import { cn } from "../lib/utils";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import type { KeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";

const categories = [{ label: "Latest", tag: "latest" }, ...config.categories];

export interface BlogNavigationBarProps {
  className?: string;
  active: string;
}

export const FilterBar = ({ className, active }: BlogNavigationBarProps) => {
  const param = useSearchParams();
  const [searchText, setSearchText] = useState<string>(
    param.get("query") || ""
  );
  const [isSearchActive, setIsSearchActive] = useState(
    param.get("query") !== null && param.get("query") !== ""
  );
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isSearchActive) {
      searchInputRef.current?.focus();
    }
  }, [isSearchActive]);

  const onHandleKey = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (searchText === "") {
        router.push("/");
      } else {
        const urlPath = `/?query=${searchText}`;
        router.push(urlPath);
      }
    }
    if (e.key === "Escape") {
      setIsSearchActive(false);
    }
  };

  const onClearSearch = () => {
    setIsSearchActive(false);
    if (
      searchText === "" &&
      !(param.get("query") === "" || param.get("query") === null)
    ) {
      router.push("/");
    }
  };

  return (
    <div className={cn("flex items-center justify-between", className)}>
      {isSearchActive ? (
        <div className="flex w-full items-center justify-between rounded-sm border px-1">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search..."
            className="w-full border-none bg-transparent px-4 py-2 focus-visible:outline-none"
            onKeyUp={(e) => onHandleKey(e)}
            onBlur={onClearSearch}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={onClearSearch} className="ml-4">
            <X className="h-5 w-5" />
          </button>
        </div>
      ) : (
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-2">
            {categories.map((category) => (
              <div
                key={category.tag}
                className={cn(
                  "border py-1 px-2",
                  active === category.tag &&
                    "text-primary-foreground bg-primary"
                )}
              >
                {category.label}
              </div>
            ))}
          </div>
          <div className="flex-shrink-0">
            <button onClick={() => setIsSearchActive(true)}>
              <Search className="bg-primary-foreground m-2 h-5 w-5 rounded" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
