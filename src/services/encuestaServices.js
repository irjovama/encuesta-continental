import apiFetch from "./apiFetch";

export function getQuestionsFromTest(id){
  return apiFetch(`/tests/${id}/questions`).then((u)=> u).catch((e)=> e);
}

export function getOptions(){
  return apiFetch(`/options`).then((u)=> u).catch((e)=> e);
}