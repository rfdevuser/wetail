"use client"
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useQuery, useReactiveVar } from '@apollo/client';
import { GET_FABRIC_PRODUCTS } from '@/utils/gql/GQL_QUERIES';
import FabricCardShimmer from '@/components/Assests/SimmerFabricCard';
import FabricCard from '@/components/Assests/FabricCard';
import FilterComponentLining from '@/components/Assests/FilterComponentLining';
import button1 from '@/components/Assests/Button'
import { userAgentFromString } from 'next/server';
import Link from 'next/link';
import ColourDropdownBoxLining, { DropdownComponet } from '@/components/Assests/ColourDropdownBoxLining'
const Fabric_Stores = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [offset, setOffset] = useState(0);
  const [endCursor, setEndCursor] = useState(null);
  const [loadingbelow, setloadingbelow] = useState(false);
  const [filterValue, setFilterValue] = useState(null);
  const [SingleProduct, setSingleProduct] = useState(null);
  // console.log(filterValue)
  // const filterValue = null;

  const queryVariables = {
    firstt: 20,
    cat: "Lining Fabric",
    mafter: null,
  };

  if (filterValue !== null) {
    queryVariables.filter = filterValue;
  }
  const { loading, error, data, fetchMore } = useQuery(GET_FABRIC_PRODUCTS, {
    variables: queryVariables,
  });
  console.log(data)
  // const hasNextPage = data?.products?.pageInfo?.hasNextPage;
  // console.log("hasnextpage",hasNextPage)
  // Function to load more data
  const loadMore = () => {
 
    setloadingbelow(true)
    
    fetchMore({

      
      variables: {

        mafter: data?.products?.pageInfo?.endCursor,
      },

      // pass previous query result and the new results to `updateQuery`
      updateQuery: (previousQueryResult, { fetchMoreResult }) => {
        // define edges and pageInfo from new results
        const newEdges = fetchMoreResult.products.edges;
        const pageInfo = fetchMoreResult.products.pageInfo;

        // if newEdges actually have items,
        return newEdges.length
          ? // return a reconstruction of the query result with updated values
          {
            // spread the value of the previous result
            ...previousQueryResult,

            products: {
              // spread the value of the previous `allStarhips` data into this object
              ...previousQueryResult.products,

              // concatenate edges
              edges: [...previousQueryResult.products.edges, ...newEdges],

              // override with new pageInfo
              pageInfo,
            },
          }
          : // else, return the previous result
          previousQueryResult;
      },
    });

  };


  useEffect(() => {
    const handleScroll = () => {
      // console.log("i am und/er handleScroll")
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
 
      if (scrollTop + clientHeight + 1 >= scrollHeight && !loading) {
        <p>loading...</p>
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, data, fetchMore]);

  const handleFilterChange = (word) => {
    setFilterValue(word);
  };
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
  const handleClickOfSingleFabric =()=>{
    console.log(SingleProduct)
 
  }

  
  return (
    <>
      <div className='mx-10 lg:mx-40  mt-10 flex lg:flex-row md:flex-col sm:flex-col'>
        <div className=''>
          <div>
            <button id="filterButton" className="smky-btn3 border-2 border-black relative hover:text-white py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-gradient-to-br from-purple-500 to-pink-500 after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-800 lg:order-1 sm:order-2 md:order-2 sm:order-2 md:order-2" onClick={toggleFilter}>FILTER BY FABRIC TYPES</button>
          </div>
          <div id="colorBoxContainer" className="lg:w-auto w-full lg:order-2 sm:order-1 md:order-1 sm:order-1 md:order-1">
            <div className='mt-2'><ColourDropdownBoxLining setFilterValue={handleFilterChange} /></div>
          </div>
        </div>

      </div>
      <div className='border-2 border-black mt-10 relative'>
        <div className='container '>
          {loadingbelow && <p className="text-center py-4 bottom-0">{setloadingbelow(false)}{console.log("loading")}</p>}
        </div>

        {loading ? (
          <FabricCardShimmer count={data ? data.products.edges.length : 20} />
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <div className='mx-auto mt-10 justify-items-center grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 '>
            {showFilter && <FilterComponentLining setFilterValue={handleFilterChange} />}

            {data && data.products && data.products.edges.map((edge, index) => (
              
            
              <FabricCard
              key={edge.node.id} 
                name={edge.node.name}
                image={edge.node.image.sourceUrl}
                slug={edge.node.slug}
                price={edge.node.price}
                setSingleProduct={setSingleProduct}
              />

            
            ))}
          </div>
        )}
        {/* <button1 className='mx-auto flex justify-content-center border-2 border-black' onClick={handleOnClick}>load more</button1> */}
        {/* <div className='flex justify-content-center mt-5 '>   <button onClick={handleOnClick}
  class="group mx-auto flex justify-content-center  p-0.5 mb-2 mr-2 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
>
  <span
    class="relative px-5 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
  >
    Load more Fabric
  </span>
  <div
    class="ease-in duration-300 opacity-0 group-hover:block group-hover:opacity-100 transition-all"
  >
    <div
      class="ease-in-out duration-500 -translate-y-4 pointer-events-none transition-all group-hover:-translate-y-16 absolute left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2"
    >
      <div class="rounded-sm bg-black py-1 px-2">
        <p class="whitespace-nowrap">Loading...</p>
      </div>
      <div
        class="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black"
      ></div>
    </div>
  </div>
</button>
</div> */}
      </div>
    </>
  );
}

export default Fabric_Stores;
