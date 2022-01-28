## Build a Framework

We will have 2 types of classes:

1. Model classes - Handle data, used to represent Users, Blog posts, Images, etc.
2. Viewclasses - Handle html and event caused by the user (like clicks)

## Extraction Approach

The idea is to build something specific and then extract a library out of it.

In our case:

1. Build class User as a 'mega' class with tons of methods
2. Refactor User to use composition
3. Refactor User to be a reusable class that can represent any piece of data, not just a User
