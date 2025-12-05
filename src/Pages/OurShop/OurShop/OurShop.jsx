
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Cover from "../../Shared/Cover/Cover";
import shopCoverimg from "../../../assets/shop/banner2.jpg";
import "./OurShop.css"; // Custom CSS for styling
import useMenu from "../../../hooks/useMenu/useMenu";
import ShopCard from "../../../compontents/ShopCard/ShopCard";
import { useLoaderData, useParams } from "react-router-dom";
import Categary from "../../Home/categary/Categary";
import { Helmet } from "react-helmet-async";
import ReactPaginate from "react-paginate";

const OurShop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const itemsPerPage = 6;

  // পেজিনেশন স্টেট
  const [currentPage, setCurrentPage] = useState(0);

  // নির্বাচিত ক্যাটাগরির আইটেম ফিল্টার করা
  const filteredItems = menu.filter(
    (item) => item.category === categories[tabIndex]
  );

  // বর্তমান পেজের আইটেম নির্ধারণ করা
  const offset = currentPage * itemsPerPage;
  const currentItems = filteredItems.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

  // পেজ পরিবর্তন হ্যান্ডলার
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover img={shopCoverimg} title="OUR SHOP" />

      <div className="my-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="custom-tablist uppercase">
            {categories.map((cat, index) => (
              <Tab key={index} className={tabIndex === index ? "active-tab" : ""}>
                {cat}
              </Tab>
            ))}
          </TabList>

          {categories.map((cat, index) => (
            <TabPanel key={index}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 ml-6 mt-16">
                {currentItems.map((item) => (
                  <ShopCard key={item._id} item={item} />
                ))}
              </div>
              <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
                previousClassName={"previous"}
                nextClassName={"next"}
                disabledClassName={"disabled"}
              />
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
