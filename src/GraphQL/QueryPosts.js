import {gql} from '@apollo/client';
export const GET_Posts= gql`
    query{
        Post{
            Author 
            Titel 
            Content
            Date
            }
        }
`