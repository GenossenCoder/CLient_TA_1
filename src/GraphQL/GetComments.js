import {gql} from '@apollo/client';
export const GET_Posts= gql`
    query{
        getPost{
            id
            Author 
            Titel 
            Content
            Date
            }
        }
`