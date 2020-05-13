const shouldRenderStars = stars > 0 && loggedIn && pet === 'dog' && beerPref === 'light'

  return (  <div>    {shouldRenderStars && (      <div>        {''.repeat(stars)}      </div>    )}  </div>);


// for opening profile fill modal when user logs in


  const [open, setOpen] = useState(false)

  const profileFill = async (user) => {
    const moreInfo = ['name', 'clean_pref', 'fenced_pref', 'busy_pref', 'big_pref', 'note']
    for(let [key, value] of Object.entries(user)) {
      if(moreInfo.includes(key)) {
        if(value === '' || value === null) {
        setOpen(true)
        }
      }
    }
  }

