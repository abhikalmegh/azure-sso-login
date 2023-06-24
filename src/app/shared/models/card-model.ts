export interface ModelCard {
    modelData: {
        models : [
            ModelCardProperty
        ];
    }
   
}

export interface ModelCardProperty {
    id: number;
    title: string;
    slug: string;
    owner: {};
    subtitle: string;
    fullUrl: string;
    voteCount: number;
    isAlreadyVotedUp: boolean;
    notebookCount: number;
}
