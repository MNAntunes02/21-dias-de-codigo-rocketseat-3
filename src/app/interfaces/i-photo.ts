export interface IPhoto {
    
    id: string,
    created_at: string,
    updated_at: string,
    promoted_at: string,
    width: number,
    height: number,
    color: string,
    blur_hash: string,
    description: string,
    alt_description: string,
    urls: {
        raw: string,
        full:string,
        regular: string,
        small: string,
        thumb: string,
        small_s3: string,
    },
    links: object,
    categories: object,
    likes: number,
    liked_by_user: boolean,
    current_user_collections: object,
    sponsorship: object,
    topic_submissions: object,
    user: object,
    tags: object
    
}
