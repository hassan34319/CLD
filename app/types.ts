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

export interface Trainer {
  _id: string;
  name: string;
  image: {
    asset: {
      url: string;
    };
  };
  title: string;
  para1: string;
  para2: string;
}

export interface Work {
  _id: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  title: string;
  image: {
    asset: {
      url: string;
    };
  };
  learningSolutionText: string;
  learningSolutions: {
    name: string;
    description: string;
  }[];
  trainingPrograms: {
    name: string;
    trainingProgram: {
      _ref: string;
      _type: 'reference';
    };
    slug: {
      _type: 'slug';
      current: string;
    };
  }[];
}

