# Answers for Week5 assignment

## EX-01

1. How did using useEffect() and axios help separate logic from UI?

Using useEffect() and axios separates data-fetching logic from the UI, making the component cleaner. useEffect handles
when to fetch, and axios handles how, so the UI just focuses on displaying the data.

2. What state challenges did you face while managing form input and API response?

I had to transform the input object or add attributes as so since at each stage it may or may not have the state data.

3. How does REST structure help React developers write cleaner frontend code?

REST gives React devs a clear and consistent way to talk to the backend—like knowing exactly which URL to hit for what.
That keeps data logic simple and lets the UI focus on just rendering stuff, not figuring out where or how to get i

## EX-02

1. How do sub-resource routes like /journalists/:id/articles help in designing a
   clear and organized API?
   Explain the benefits of using nested routes for resource relationships in REST APIs.

Sub-resource routes like /journalists/:id/articles make it super clear that you're asking for articles by a specific
journalist. Helps organize the API so it feels more logical and grouped.

2. What challenges did you face when managing multiple filter states (journalist and
   category) in React?
   Discuss how you handled state updates and conditional rendering when multiple inputs
   affect the same output.

Managing multiple filters got messy—had to track more state, avoid re-fetching too much, and make sure filters don’t
clash or reset each other by mistake.

3. What would be the advantages and disadvantages of handling the filtering entirely
   on the frontend versus using API-based filtering?
   Compare client-side filtering (in-memory) vs. server-side filtering (via query or nested
   routes).

I used separate state for each filter, then updated the article list only when filters changed. Used simple checks to
avoid rendering stuff that didn’t match.

4. If you needed to allow filtering by both journalist and category at the same time on
   the backend, how would you modify the API structure?
   Think about adding query parameters or designing a new combined route.

Frontend filtering is faster and no server calls, but bad if you have a ton of data. Backend filtering is cleaner for
large datasets but takes more setup and makes the frontend depend on the API more.
For backend filtering by both, I’d use query params like /articles?journalist=2&category=1—easier to combine data and
scale it later.

5. How did this exercise help you understand the interaction between React state, form
   controls, and RESTful API data?
   Reflect on how state changes triggered data fetching and influenced the UI rendering
   logic.

This made me get how React state ties into form inputs, and how even small changes can totally affect what shows up. You
really see how the UI reacts to API data and state together.
