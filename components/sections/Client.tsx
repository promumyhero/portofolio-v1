"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { clientReviews } from "@/lib/navitem";

const Client = () => {
  const [active, setActive] = useState<
    (typeof clientReviews)[number] | boolean | null
  >(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);
  // @ts-ignore
  useOutsideClick(ref, () => setActive(null));

  return (
    <section className="c-space my-28">
      <h3 className="head-text">Hear what my clients say about me</h3>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.name}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.05 },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.id}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] mx-auto sm:mx-4 h-auto max-h-[80vh] flex flex-col bg-white dark:bg-neutral-900 rounded-xl sm:rounded-3xl overflow-hidden shadow-xl"
              style={{
                margin: "1rem",
                maxHeight: "calc(100vh - 2rem)",
              }}
            >
              {/**
               * ini bagian halaman detail
               */}
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <motion.div layoutId={`image-${active.id}-${id}`}>
                      <img
                        src={active.img}
                        alt={active.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                    </motion.div>

                    <div className="flex flex-col">
                      <motion.h3
                        layoutId={`name-${active.id}-${id}`}
                        className="font-semibold text-neutral-800 dark:text-white-800"
                      >
                        {active.name}
                      </motion.h3>
                      <motion.p
                        layoutId={`position-${active.id}-${id}`}
                        className="text-neutral-600 dark:text-white-500"
                      >
                        {active.position}
                      </motion.p>
                    </div>
                  </div>
                </div>

                <motion.div
                  layoutId={`review-${active.id}-${id}`}
                  className="mt-4 text-neutral-600 dark:text-white font-light text-justify max-h-[40vh] overflow-y-auto"
                >
                  {active.fullReview}
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {clientReviews.map((client) => (
          <motion.div
            layoutId={`card-${client.id}-${id}`}
            key={client.id}
            onClick={() => setActive(client)}
            className="client-review bg-white/5 backdrop-blur-sm rounded-xl p-6 cursor-pointer hover:bg-white/10 transition-colors"
          >
            <motion.div
              layoutId={`review-${client.id}-${id}`}
              className="text-white font-light mb-4"
            >
              {client.review.length > 150
                ? `${client.review.substring(0, 150)}...`
                : client.review}
            </motion.div>
            {/**
             * ini bagian pas belum di click
             */}
            <div className="client-content">
              <div className="flex gap-3">
                <motion.div layoutId={`image-${client.id}-${id}`}>
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-12 h-12 rounded-full mt-1 mr-1"
                  />
                </motion.div>

                <div className="flex flex-col">
                  <motion.p
                    layoutId={`name-${client.id}-${id}`}
                    className="font-semibold text-white-800"
                  >
                    {client.name}
                  </motion.p>
                  <motion.p
                    layoutId={`position-${client.id}-${id}`}
                    className="text-white-500 md:text-base text-sm"
                  >
                    {client.position}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export default Client;
