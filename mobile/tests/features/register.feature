@test @register
Feature: Test Register

    Background: Background name
        Given user on login page
        And user go to register page

    @positive
    Scenario: Register Success
        When user register with valid data
        Then validate user success register

    @negative
    Scenario Outline: Register failed
        Given user register with full name "<fullName>", email "<email>", password "<password>" and confirm password "<confirmPassword>"
        Then validate error message "<errorField>" is displayed

        Examples:
            | fullName  | email             | password   | confirmPassword | errorField       |
            |           |                   |            |                 | all              |
            |           | testing@email.com | Welcome123 | Welcome123      | full name        |
            | hadiyanto |                   |            | Welcome123      | email            |
            | hadiyanto | testing@email.com |            | Welcome123      | password         |
            | hadiyanto | testing@email.com | Welcome123 |                 | confirm password |
