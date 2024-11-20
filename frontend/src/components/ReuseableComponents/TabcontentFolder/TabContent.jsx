import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Information from "./Information";
import Description from "./Description";
import ReviewsCard from "./ReviewsCard";

export default function TabContent() {
  const [getReviewsData, setgetReviewsData] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const response = await fetch("/JsonData/Reviews.json");
      const data = await response.json();
      setgetReviewsData(data);
    };
    getReviews();
  }, []);

  return (
    <Tabs>
      <TabList>
        <Tab>
          <h5 className="text-[16px]">Information</h5>
        </Tab>
        <Tab>
          <h5 className="text-[16px]">Description</h5>
        </Tab>
        <Tab>
          <h5 className="text-[16px]">
            Reviews (
            {getReviewsData.length < 10
              ? "0" + getReviewsData.length
              : getReviewsData.length}
            )
          </h5>
        </Tab>
      </TabList>

      <TabPanel>
        <Information />
      </TabPanel>
      <TabPanel>
        <Description />
      </TabPanel>
      <TabPanel>
        <div className="flex flex-col gap-4">
          {getReviewsData.map((item, index) => (
            <ReviewsCard key={index} item={item} />
          ))}
        </div>
      </TabPanel>
    </Tabs>
  );
}
