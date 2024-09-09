// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { CheckOut } from "../interfcaes";

// const checkOutReducer = createApi({
//   reducerPath: "checkOut",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
//   endpoints: (builder) => ({
//     getCheckOuts: builder.query<CheckOut, void>({
//       query: () => "checkout",
//     }),
//     getCheckOutByUser: builder.query<CheckOut, void>({
//       query: (id) => `checkout/${id}`,
//     }),
//   }),
// });

// export const { useGetCheckOutsQuery, useGetCheckOutByUserQuery } =
//   checkOutReducer;
