import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import React, { FunctionComponent } from "react";

interface BreadcrumbProps {
  label: string;
  href: string;
}

export const FullWidthHero: FunctionComponent<{
  title: string;
  description: string;
  breadcrumb?: BreadcrumbProps[];
}> = ({ title, description, breadcrumb }) => {
  return (
    <div
      className={cn(
        "pb-16",
        breadcrumb ? "pt-8" : "pt-16",
      )}
    >
      <div className="container mx-auto">
        {breadcrumb && (
          <Breadcrumb className="mt-8">
            <BreadcrumbList>
              {breadcrumb?.map((crumb, index) => (
                <React.Fragment key={index}>
                  <BreadcrumbItem>
                    {index === breadcrumb.length - 1 ? (
                      <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={crumb.href}>
                        {crumb.label}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumb.length - 1 && <BreadcrumbSeparator />}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        )}
        <div className="prose lg:prose-lg text-balance mt-16 mx-auto text-center">
          <h1>{title}</h1>
        </div>
        <div className="my-6 text-lg text-center">{description}</div>
      </div>
    </div>
  );
};
