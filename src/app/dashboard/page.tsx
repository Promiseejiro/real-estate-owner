"use client";
import { useEffect, useState } from "react";
import { Status } from "./components/status";
import {
  InvestmentCard,
  InvestmentBanner,
  DealerCard,
  ProgressBar,
  ProfileDropdown,
} from "./components";
import { InvioceDataType } from "@/types";
import { fetchCustomerInvoice } from "./apiRequests";
import { useQuery } from "@tanstack/react-query";

import { AppButton } from "@/components";
import { BsArrowRight } from "react-icons/bs";
import LoaderView from "@/components/loaderView";

const Page = () => {
  const {
    data: invoice,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["fetchCustomerInvoice"],
    queryFn: fetchCustomerInvoice,
    // onSuccess: (res) => console.log("Recent Transactions", res),
    // onError: () => {
    //   alert("Error fetching recent transactions.");
    // },
  });
  const [investmentFilterString, setIvestmetFilterString] = useState("All");
  const [investmentId, setInvestmetId] = useState("");

  const [investmentPreview, setIvestmenPreview] = useState<
    InvioceDataType | undefined
  >();
  const [allInvestment, setAllInvestment] = useState<InvioceDataType[]>([]);
  const [filteredInvestment, setFilteredInvestment] = useState<
    InvioceDataType[]
  >([]);

  useEffect(() => {
    setFilteredInvestment(
      investmentFilterString !== "All"
        ? allInvestment.filter(
            (item: any) => item.investmentType === investmentFilterString
          )
        : allInvestment
    );
  }, [investmentFilterString]);

  useEffect(() => {
    if (!investmentId) {
      setIvestmenPreview(
        allInvestment.filter((item) => item.id === investmentId)[0]
      );
      console.log(allInvestment);
    } else {
      setIvestmenPreview(
        allInvestment.filter((item) => item.id === investmentId)[0]
      );
    }
  }, [investmentId]);

  useEffect(() => {
    setAllInvestment(invoice ? invoice.invoiceData : []);
    setFilteredInvestment(invoice ? invoice.invoiceData : []);
    setIvestmenPreview(invoice ? invoice.invoiceData[0] : undefined);
  }, [invoice]);

  const investmentType: string[] = ["All", "Land", "Building", "Investments"];
  return (
    <>
      {isLoading ? (
        <LoaderView />
      ) : (
        <>
          <div className="flex flex-col gap-2 lg:flex lg:flex-row lg:items-center justify-between py-4 px-6">
            <ProfileDropdown name={invoice?.name} imageUrl={""} />
            <AppButton
              iconLeft={<BsArrowRight className="text-white h-4 w-4" />}
              title="View Real Estate"
              className="transparent text-dark"
            ></AppButton>
          </div>
          <div className="flex flex-col-reverse lg:flex lg:flex-row items-start w-full">
            <div className="w-full lg:w-[35%]  py-6 bg-[#FAFAFA]">
              <div className="px-4">
                <h4 className="font-semibold text-sm lg:text-xl">
                  Real Estate Investments
                </h4>
                <div className="flex items-center gap-4 my-6">
                  {investmentType.map((item, index: number) => (
                    <Status
                      isNav={true}
                      key={index}
                      active={investmentFilterString === item ? true : false}
                      text={item}
                      action={() => setIvestmetFilterString(item)}
                    />
                  ))}
                </div>
              </div>
              {filteredInvestment.map((investment, index) => (
                <InvestmentCard
                  {...investment}
                  key={index}
                  onClick={(id) => {
                    setInvestmetId(id);
                  }}
                />
              ))}
            </div>
            <div className="w-full lg:w-[70%] border-l border-solid border-lightGrey">
              {investmentPreview && <InvestmentBanner {...investmentPreview} />}
              <ProgressBar />
              {/* <InvestmentPreview {...investmentPreview} /> */}
              <div className="px-4 py-6 border-solid border-t border-lightGrey grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-x-8 gap-y-8">
                {investmentPreview && (
                  <DealerCard {...investmentPreview.developerInfo} />
                )}
                {investmentPreview && (
                  <DealerCard {...investmentPreview?.realtorGroupInfo} />
                )}
                {investmentPreview && (
                  <DealerCard {...investmentPreview?.realtorInfo} />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Page;
