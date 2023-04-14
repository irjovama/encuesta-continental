import apiFetch from "./apiFetch";

export function getQuestionsFromTest(id){
  return apiFetch(`/tests/${id}/questions`).then((u)=> u).catch((e)=> e);
}

export function getOptions(){
  return apiFetch(`/options`).then((u)=> u).catch((e)=> e);
}

export function getTest(id){
  return apiFetch(`/tests/${id}`).then((u)=> u).catch((e)=> e);
}

export function createAnswer(body){
  return apiFetch(`/user_questions`, {method: "POST" ,body: body}).then((u)=> u).catch((e)=> e);
}

