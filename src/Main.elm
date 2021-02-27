port module Main exposing (main)

import Browser
import FeatherIcons as Icon exposing (Icon)
import Html exposing (Html, a, button, div, footer, h1, h2, header, img, p, section, span, text)
import Html.Attributes exposing (alt, class, classList, href, rel, src, target)
import Html.Attributes.Aria exposing (ariaLabel)
import Html.Events exposing (onClick)
import Http
import Json.Decode as JD exposing (Decoder)
import Json.Decode.Pipeline as JDP
import Localization exposing (Lang(..), Localization, localizations)
import Task
import Time



-- PORTS


port setLang : String -> Cmd msg



-- TYPES


type alias Project =
    { name : String
    , fork : Bool
    , url : String
    }


type Status a
    = Failure
    | Loading
    | Success a


type alias SocialNetwork =
    { url : String
    , name : String
    , icon : Icon
    }



-- MAIN


main : Program (Maybe String) Model Msg
main =
    Browser.element
        { init = init
        , update = update
        , subscriptions = \_ -> Sub.none
        , view = view
        }



-- MODEL


type alias Model =
    { lang : Lang
    , modal : Bool
    , currentYear : Int
    , projects : Status (List Project)
    }


init : Maybe String -> ( Model, Cmd Msg )
init maybeLang =
    ( { lang = Localization.fromString maybeLang
      , modal = False
      , currentYear = 0
      , projects = Loading
      }
    , Cmd.batch [ getGitProjects, getCurrentYear ]
    )



-- UPDATE


type Msg
    = GotGitProjects (Result Http.Error (List Project))
    | NewTime Time.Posix
    | ChangeLang Lang
    | ShowModal
    | HideModal


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NewTime newTime ->
            ( { model | currentYear = Time.toYear Time.utc newTime }, Cmd.none )

        ChangeLang lang ->
            ( { model | lang = lang }, setLang <| Localization.toString lang )

        ShowModal ->
            ( { model | modal = True }, Cmd.none )

        HideModal ->
            ( { model | modal = False }, Cmd.none )

        GotGitProjects result ->
            case result of
                Ok projects ->
                    ( { model | projects = Success projects }, Cmd.none )

                Err _ ->
                    ( { model | projects = Failure }, Cmd.none )



-- VIEW


view : Model -> Html Msg
view model =
    let
        local =
            localizations model.lang
    in
    div [ class "flex flex-col h-full font-sans antialiased text-gray-800 bg-white dark:bg-black dark:text-white" ]
        [ viewHeader local model.lang
        , viewSection local
        , viewFooter local model.currentYear
        , viewModal local model.modal model.projects
        ]


viewHeader : Localization -> Lang -> Html Msg
viewHeader local lang =
    header [ class "flex items-center justify-between px-2 sm:px-6 h-28 lg:justify-around" ]
        [ div [ class "flex" ]
            [ viewLogo ]
        , div [ class "flex items-center space-x-4 sm:space-x-6" ]
            [ viewChangeLang lang
            , viewButton ShowModal local.projects Icon.github
            ]
        ]


viewSection : Localization -> Html msg
viewSection local =
    section [ class "flex items-center justify-center flex-grow" ]
        [ viewTitle "jose g" local.profession ]


viewFooter : Localization -> Int -> Html msg
viewFooter local currentYear =
    footer []
        [ div [ class "flex flex-wrap justify-center px-6" ] <|
            List.map
                viewSocialNetwork
                socialNetworks
        , viewCopyright local.allRightsReserved currentYear
        ]


viewCopyright : String -> Int -> Html msg
viewCopyright allRightsReserved currentYear =
    div [ class "flex flex-col items-center justify-center my-4 space-x-2 space-y-1 text-xs font-medium xs:flex-row xs:space-y-0 xs:text-base" ]
        [ div [ class "space-x-2" ]
            [ span [ class "font-semibold text-red-500 lowercase" ]
                [ text "© josegpt" ]
            , span []
                [ text <| String.append "1992 • " <| String.fromInt currentYear ]
            ]
        , span [ class "capitalize" ]
            [ text allRightsReserved ]
        ]


viewModal : Localization -> Bool -> Status (List Project) -> Html Msg
viewModal local isOpen projectsStatus =
    let
        content status =
            case status of
                Loading ->
                    viewSpinner

                Failure ->
                    viewFailure

                Success projects ->
                    viewProjects <| filterOwnedProjects projects
    in
    div [ class "z-10" ]
        [ div
            [ onClick HideModal
            , classList [ ( "scale-100", isOpen ), ( "scale-0", not isOpen ) ]
            , class "fixed inset-0 transition duration-300 ease-in-out origin-bottom transform bg-black opacity-25 dark:bg-gray-700"
            ]
            []
        , div [ classList [ ( "translate-y-0", isOpen ), ( "translate-y-full", not isOpen ) ], class "fixed inset-x-0 bottom-0 max-w-3xl pb-16 mx-auto transition duration-300 ease-in-out delay-200 transform bg-white rounded-t-lg h-3/4 dark:bg-black" ]
            [ header [ class "flex items-center justify-between h-16 mx-6" ]
                [ h2 [ class "text-3xl font-bold capitalize" ]
                    [ text local.projects ]
                , viewIconButton HideModal "close modal" Icon.x
                ]
            , content projectsStatus
            ]
        ]


viewProjects : List Project -> Html msg
viewProjects projects =
    div [ class "grid h-full grid-cols-1 gap-6 px-6 overflow-y-auto xs:grid-cols-2 md:grid-cols-3" ] <|
        List.map viewProjectCard projects


viewProjectCard : Project -> Html msg
viewProjectCard project =
    let
        trimmedText name =
            if String.length name >= 17 then
                String.append (String.left 11 project.name) "..."

            else
                name
    in
    a
        [ href project.url
        , target "_blank"
        , rel "noreferrer"
        , class "relative flex items-center justify-center px-4 py-20 text-red-500 transition duration-300 ease-in-out bg-red-100 rounded-xl hover:text-white hover:bg-red-500 dark:bg-red-900 dark:text-red-500 dark:hover:text-black dark:hover:bg-red-500"
        ]
        [ viewIcon Icon.cornerRightUp |> Icon.withClass "absolute top-0 right-0 m-4" |> Icon.toHtml []
        , span [ class "text-2xl font-semibold whitespace-nowrap" ]
            [ text <| trimmedText project.name ]
        ]


viewSpinner : Html msg
viewSpinner =
    div [ class "flex h-full w-full items-center justify-center" ]
        [ viewIcon Icon.github |> Icon.withClass "h-10 w-10 text-red-500 animate-spin" |> Icon.toHtml [] ]


viewFailure : Html msg
viewFailure =
    div [ class "flex flex-col items-center justify-center h-full space-y-2" ]
        [ viewIcon Icon.frown |> Icon.withClass "w-10 h-10" |> Icon.toHtml []
        , p [ class "font-medium capitalize" ]
            [ text "oops, there was an error" ]
        ]


viewTitle : String -> String -> Html msg
viewTitle title subtitle =
    h1 [ class "flex flex-col text-center" ]
        [ span [ class "font-semibold capitalize text-7xl sm:text-8xl" ]
            [ text title ]
        , span [ class "-mt-1 text-lg tracking-wider text-red-500 lowercase sm:text-2xl" ]
            [ text subtitle ]
        ]


viewLogo : Html msg
viewLogo =
    div [ class "flex items-center" ]
        [ img [ src "execode-logo.svg", alt "josegpt", class "block w-20 h-20 xs:h-24 xs:w-24 dark:hidden sm:h-32 sm:w-32" ] []
        , img [ src "execode-logo-variant.svg", alt "josegpt", class "hidden w-20 h-20 xs:h-24 xs:w-24 dark:block sm:h-32 sm:w-32" ] []
        ]


viewIconButton : Msg -> String -> Icon -> Html Msg
viewIconButton msg action icon =
    button
        [ onClick msg
        , ariaLabel action
        , class "flex items-center text-gray-500 transition duration-300 ease-in-out focus:outline-none hover:text-red-500"
        ]
        [ viewIcon icon |> Icon.toHtml [] ]


viewButton : Msg -> String -> Icon -> Html Msg
viewButton msg caption icon =
    button
        [ onClick msg
        , ariaLabel caption
        , class "flex items-center px-3 py-2 space-x-2 text-red-500 transition duration-300 ease-in-out border-2 border-red-500 rounded-lg sm:space-x-2 focus:outline-none hover:bg-red-500 hover:text-white dark:hover:text-black"
        ]
        [ viewIcon icon |> Icon.toHtml []
        , span [ class "text-sm font-semibold tracking-wide uppercase xs:text-base" ]
            [ text caption ]
        ]


viewChangeLang : Lang -> Html Msg
viewChangeLang lang =
    let
        currentLang =
            case lang of
                EN ->
                    ES

                ES ->
                    EN
    in
    button
        [ onClick (ChangeLang currentLang)
        , class "flex items-center space-x-2 font-medium text-gray-500 transition duration-300 ease-in-out focus:outline-none hover:text-gray-900 dark:text-white dark:hover:text-red-500"
        ]
        [ viewIcon Icon.globe |> Icon.withClass "w-4 h-4 xs:w-5 xs:h-5" |> Icon.toHtml []
        , span [ class "uppercase text-sm xs:text-base" ]
            [ text <| Localization.toString currentLang ]
        ]


viewIcon : Icon -> Icon
viewIcon icon =
    icon |> Icon.withClass "w-5 h-5 text-current sm:w-6 sm:h-6"


viewSocialNetwork : SocialNetwork -> Html msg
viewSocialNetwork { url, name, icon } =
    a
        [ href url
        , ariaLabel name
        , target "_blank"
        , rel "noreferrer"
        , class "flex items-center justify-center w-10 h-10 mx-2 my-1 text-red-500 transition duration-300 ease-in-out bg-red-100 rounded-full hover:text-white hover:bg-red-500 dark:bg-red-900 dark:text-red-500 dark:hover:text-black dark:hover:bg-red-500"
        ]
        [ viewIcon icon |> Icon.toHtml [] ]



-- HELPERS


filterOwnedProjects : List Project -> List Project
filterOwnedProjects =
    List.filter (\project -> project.fork == False)


getCurrentYear : Cmd Msg
getCurrentYear =
    Task.perform NewTime Time.now



-- HTTP


getGitProjects : Cmd Msg
getGitProjects =
    Http.get
        { url = "https://api.github.com/users/josegpt/repos"
        , expect = Http.expectJson GotGitProjects projectsDecoder
        }


projectsDecoder : Decoder (List Project)
projectsDecoder =
    JD.list projectDecoder


projectDecoder : Decoder Project
projectDecoder =
    JD.succeed Project
        |> JDP.required "name" JD.string
        |> JDP.required "fork" JD.bool
        |> JDP.required "html_url" JD.string



-- CONSTANTS


socialNetworks : List SocialNetwork
socialNetworks =
    [ { icon = Icon.mail
      , name = "mail"
      , url = "mailto:josegpt27@gmail.com"
      }
    , { icon = Icon.linkedin
      , name = "linkedin"
      , url = "https://www.linkedin.com/in/josegpt"
      }
    , { icon = Icon.github
      , name = "github"
      , url = "https://github.com/josegpt"
      }
    , { icon = Icon.gitlab
      , name = "gitlab"
      , url = "https://gitlab.com/josegpt"
      }
    , { icon = Icon.codepen
      , name = "codepen"
      , url = "https://codepen.io/josegpt"
      }
    , { icon = Icon.facebook
      , name = "facebook"
      , url = "https://www.facebook.com/josegpt27"
      }
    , { icon = Icon.twitter
      , name = "twitter"
      , url = "https://twitter.com/josegpete"
      }
    , { icon = Icon.instagram
      , name = "instagram"
      , url = "https://www.instagram.com/josegpt/"
      }
    ]
