module Localization exposing (Lang(..), Localization, fromString, localizations, toString)

-- TYPES


type Lang
    = ES
    | EN


type alias Localization =
    { profession : String
    , projects : String
    , allRightsReserved : String
    }



-- PUBLIC


toString : Lang -> String
toString lang =
    case lang of
        EN ->
            "EN"

        ES ->
            "ES"


fromString : Maybe String -> Lang
fromString lang =
    case lang of
        Just "EN" ->
            EN

        Just "ES" ->
            ES

        Just _ ->
            EN

        Nothing ->
            EN



-- TRANSLATIONS


localizations : Lang -> Localization
localizations lang =
    case lang of
        EN ->
            { profession = "software engineer"
            , projects = "projects"
            , allRightsReserved = "all rights reserved"
            }

        ES ->
            { profession = "ingeniero en sistemas"
            , projects = "proyectos"
            , allRightsReserved = "todos los derechos reservados"
            }
