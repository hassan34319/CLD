export interface Activity {
  _id: string;
  _createdAt : Date;
  title: string;
  date: number;
  month: string;
  category: string;
  shortText: string;
  longText: { children: { text: string }[] }[];
  image: {
    asset: {
      url: string;
    };
  };
}

export interface Gallery {
  _id: string;
  images: {
    asset: {
      url: string;
    };
  }[];
}

export interface Partners {
  _id: string;
  image: {
    asset: {
      url: string;
    };
  }[];
}

export interface SocialPost {
  _id: string;
  image: {
    asset: {
      url: string;
    };
  };
  link: string;
}
