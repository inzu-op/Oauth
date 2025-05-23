If you want OAuth using Next js + Supabase
After install 
key Changes 
create "env.local" and add
url:from supabase [supabase -> Settings -> data API]
Anon_key: from supabase  [supabase -> Settings -> data API]

create a new project in Google cloude console 
"important"
on callback url in project add -> callbackurl Link from supabase -> Authentication -> providers -> google

add client Id and secret to Supabase -> Authentication -> providers -> google client id and client Secret
and save 
