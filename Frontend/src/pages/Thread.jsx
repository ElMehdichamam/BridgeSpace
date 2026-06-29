import { useState } from "react";

export default function Thread(){
    return(
    <>
        <div className="w-full max-w-[600px] border-b border-gray-200 hover:bg-gray-50/80 cursor-pointer transition-colors duration-200">

            <div className="flex gap-3 px-4 pt-3 pb-1">

              {/* Avatar */}
              <div className="shrink-0">
                <div className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-sm">
                  JD
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">

                {/* Header Row: Created By + Meta */}
                <div className="flex items-center gap-1 text-[15px] whitespace-nowrap">
                  <p className="font-bold text-gray-900 truncate">Created By</p>
                  {/* Optional: Verified Badge */}
                  <svg className="w-[18px] h-[18px] text-sky-500 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"/>
                  </svg>
                  <p className="text-gray-500 truncate">@project_lead</p>
                  <span className="text-gray-500 mx-1">·</span>
                  <p className="text-gray-500 hover:underline">2h</p>
                </div>

                {/* Title (The main tweet body) */}
                <p className="text-[15px] text-gray-900 mt-0.5 leading-normal whitespace-pre-wrap break-words">
                  title
                </p>

                {/* Project (Styled like a hashtag or link) */}
                <p className="text-sky-500 hover:underline mt-1 text-[15px]">
                  #Project
                </p>

                {/* Deadline (Action Bar Area) */}
                <div className="flex items-center justify-between mt-3 max-w-md text-gray-500 -ml-2 pb-3">

                  {/* Deadline Text acting as timestamp/link area */}
                  <span className="text-[13px] hover:underline flex items-center gap-1">
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                    </svg>
                    deadline
                  </span>
                </div>
              </div>
            </div>
          </div>
    </>
    );
}

