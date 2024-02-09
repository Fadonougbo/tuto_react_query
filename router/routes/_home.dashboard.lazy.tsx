import { createLazyFileRoute } from '@tanstack/react-router'

const Dashboard=()=> {

  return (
    
    <main>
      <div id='dashboard_head' >
        <h1>Add new peace message form the world</h1>
      </div>
      <form action="">
      <div>
          <input type="text" name="author" id="author" />
        </div>
        <div id='message_area_container' >
          <textarea name="message" id="message" ></textarea>
        </div>
        <div id='submit_button_container' >
          <button>Add</button>  
        </div>    
      </form>
    </main>
  )
}

export const Route = createLazyFileRoute('/_home/dashboard')({
  component: Dashboard 
})