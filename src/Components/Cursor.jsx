export default function Cursor() {
  return (
    <>
      <div
        id="cursor"
        className="pointer-events-none left-0 z-[999] fixed top-0 left-0"
      >
        {/* <div class="fixed top-0 -translate-x-1/2 -translate-y-1/2 mix-blend-difference stroke-dark fill-transparent ">
          <svg height="60" width="60">
            <circle id="big" cx="30" cy="30" r="18" stroke-width="0.8"></circle>
          </svg>
        </div> */}

        <div class="fixed top-0 -translate-x-1/2 -translate-y-1/2 mix-blend-difference">
          <svg height="10" width="10">
            <circle cx="4" cy="4" r="3" stroke-width="0"></circle>
          </svg>
        </div>
      </div>
    </>
  );
}
