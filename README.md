# [Company-name] workspace

Monorepo for different apps and librarries of [company-name]

## Apps

- imageboard - simple image search application

## Libs

- giphy-api - angular library to integrate with GiphyAPI

### Imageboard

Simple image viewing app. On home page it shows you 50 trending gifs.

If you use "search" input it will redirec you to the search result where you can PAGINATE throug search results (right bottom).

Pagination and search state taken from URL, so you can reload page or send link to someone.

APP using async censoring service to prevent users to search something company does not want them to search to. Right now implentation (`core/services/censoring.service.ts`) does client side blacklisting, but because it returns `Observable` it could be easily changed to do actual calls.

Search input uses this service to create async validation and does not allow user to submit search with not allowed terms. For sake of simplicity of test task whitelisting is very straightforward (Just check if query in the black list).

In case user type invalid search query directly into url, search service will not allow to perform search and throw an error.

All routes in the application are lazy and preloaded because of preloading strategy.

Types from `giphy-api` library are re-exported from app `core` module to reduce third-party library footprint on application. In case company decided to move from GIPHY to another image provider we will have single source of interfaces across application.

I ntentionally did not write any tests to save some time for you and myself. I would be glad if you trust my word that I know how to do it.

to start an app `npm start` or `yarn star`
