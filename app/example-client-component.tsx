"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const ExampleClientComponent = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    console.log(pathName, searchParams);
  }, [pathName, searchParams]);
  return <p>Current PathName: {pathName}</p>;
};

export default ExampleClientComponent;
