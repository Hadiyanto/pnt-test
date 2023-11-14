@test
Feature: Test API

    @get
    Scenario: Example Get Method
        Given user send GET request to "/posts"
        Then user validate response code is 200
        And type of value response body "userId" should be "integer"
        And type of value response body "id" should be "integer"
        And type of value response body "title" should be "string"
        And type of value response body "body" should be "string"

    @post
    Scenario Outline: Example Post Method
        Given user send POST request to "/posts" with body "default"
        Then user validate response code is 201
        And value of response body "title" should be "<title>"
        And value of response body "body" should be "<body>"
        And value of response body "userId" should be "<userId>"
        Examples:
            | title          | body       | userId |
            | recommendation | motorcycle | 12     |


