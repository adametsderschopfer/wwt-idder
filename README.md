<h1 style="text-align: center;">WWT - idder</h1>

<p><b>Example</b></p>
<code>
  const id = await Idder.gen();

//*
*
*{
*  id: 's9Am4tu-6ErB91M-91o089f-Rx43tcg',
*  date: 2020-06-10T17:48:21.955Z
*}
*
//

</code>

<p>or</p>

<code>
  Idder.gen().then(idObj => {
    console.log(idObj)
  })

//*
*
*{
*  id: 's9Am4tu-6ErB91M-91o089f-Rx43tcg',
*  date: 2020-06-10T17:48:21.955Z
*}
*
//

</code>