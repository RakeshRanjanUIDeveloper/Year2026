import { createContext, useState,useEffect } from "react";
import { fakeQuestionsAnswerFetch } from "./fakeQuestionsAnswerFetch";


export const ExamContext = createContext();

export const ExamProvider = ({children}) =>{
    
    const [allExams, setAllExams] = useState([]);
      useEffect(() => {
        const fetchExamDetails = async () => {
          try {
            const response = await fakeQuestionsAnswerFetch("https://example.com/api/questions");
            if (response.status === 200) {
                setAllExams(response.data.questions);
            }
          } catch (error) {
            console.log(error)
          } 
        };
        fetchExamDetails();
      }, []);

      return(
        <ExamContext.Provider value={{allExams}}>
            {children}
        </ExamContext.Provider>
      )
}