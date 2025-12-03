import { supabase } from "../api/supabase.js";

export async function isUserIn(){
    const { data: userData, error } = await supabase.auth.getUser();
    const user = userData.user;

    if (!user) {
      console.log('Пользователь не авторизован') 
      return;
    } else{
        console.log('Пользователь sosal') 
    }
    
}

export async function isUserAdmin(){
    try{
        const { data: userData, error } = await supabase.auth.getUser();
        const user = userData.user;
    
        if(!user) return

        const {data: profile, error: errorProfiles} = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single()
    
        if (errorProfiles) {
          console.error('Ошибка при получении профиля:', errorProfiles.message);
          return false;
        }

        return profile && profile.role === 'admin';
    } catch(error){
        console.error('Ошибка в isUserAdmin:', error);
        return false;
    }
}