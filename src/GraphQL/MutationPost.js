import {gql, useMutation} from '@apollo/client';

export const CREATE_POST_MUTATION = gql`
mutation createPost(
    $Content:String! 
    $Titel:String! 
    $Author:String){
    createPost(
        Content:$Content 
        Titel:$Titel 
        Author:$Author
        ){
        id
    }
}
`

