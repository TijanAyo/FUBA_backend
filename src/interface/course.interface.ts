import { Types } from 'mongoose';

export enum Difficulty {
  Beginner = 'Beginner',
  Intermidate = 'Intermidate',
  Advance = 'Advance',
}

export interface ISection {
  title: string;
  description: string;
  video_description: string;
  video: string;
}

export interface IModule extends Document {
  _id: Types.ObjectId;
  section: ISection[];
}

export interface ICourse extends Document {
  _id: Types.ObjectId;
  course_title: string;
  course_description: string;
  course_image: string;
  difficulty: Difficulty;
  duration: string;
  rating: number;
  price: string;
  number_of_enrolled: number;
  course_category: string[];
  modules: IModule[];
  user: Types.ObjectId;
}

export interface createCoursePayload {
  course_title: string;
  course_description: string;
  course_image: string;
  difficulty: Difficulty;
  price: string;
  duration: string;
  course_category: string[];
  modules: IModule[];
}

// The Approach I am looking for

/* const sampleCourse: ICreateCourse = {
    title: 'Your Course Title',
    description: 'Your course description.',
    image: 'path/to/course/image.jpg',
    price: '19.99',
     duration: '3 hours',
    difficulty: Difficulty.Beginner,
    categories: ['Programming', 'Web Development'],
    modules: [
        {
            section: [
                {
                    title: 'Module 1: Course Introduction',
                    description: 'Overview of the course content.',
                    video: 'path/to/video.mp4',
                },
                // More sections for module 1
            ],
        },
        {
            section: [

            ],
        },
        // More modules
    ],
}; */
