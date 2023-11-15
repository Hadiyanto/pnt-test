@test @login
Feature: Test Login

    # Background: Register New User

    @positive
    Scenario: Login Success
        Given user on login page
        And user go to register page
        When user register with valid data
        Then validate user success register
        When user login with previous registered email
        Then validate user success login

    @negative
    Scenario: Login Invalid Password or email
        Given user login with email "admib@gmail.com" and password "Welcome123"
        Then validate error message invalid email or password is displayed

    @negative
    Scenario Outline: Login failed
        Given user login with email "<email>" and password "<password>"
        Then validate error message empty required is displayed

        Examples:
            | email           | password   |
            | admin.com       | Welcome123 |
            | admin@email.com |            |
            |                 | Welcome123 |
