const { Configuration, OpenAIApi } = require("openai");




export default async (req, res) => {

    const { query: { query } } = req;

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);
      
      const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: "create 5 startup or business ideas about fishing:\nA fishing charter service that caters to corporate clients, offering team-building and networking opportunities on the water.|A luxury fishing lodge that offers an all-inclusive experience, with top-of-the-line equipment and guides, gourmet meals, and comfortable accommodations.|A fishing tackle subscription service that delivers new and innovative tackle to anglers every month, customized to their fishing style and preferences.|A mobile app that helps anglers find the best fishing spots near them, based on real-time data from other users, weather conditions, and more.|A fishing guide service that specializes in helping beginners learn the ropes and enjoy the sport, offering lessons, tips, and trips to local lakes and rivers.\n\ncreate another 5 new unique startup or business ideas about social media, other than what you made before:\nA social media platform that is exclusively for connecting with old friends and family.|A social media platform that is geared towards connecting people with similar interests and hobbies.|A social media platform that is focused on connecting people for business networking purposes.|A social media platform that allows users to remain anonymous if they so choose.|A social media platform that is specifically for sharing and discussing news articles.\n\ncreate another 5 new unique startup or business ideas about technology, other than what you made before:\nA platform that helps businesses keep track of the latest technology trends and developments.|A service that helps businesses find the right technology solutions for their needs.|A website that reviews and compares different types of technology.|A podcast that covers the latest news and developments in the world of technology.|A blog that offers tips and advice on using technology in your everyday life.\n\ncreate another 5 new unique startup or business ideas about climate change, other than what you made before:\nA platform that helps businesses and individuals offset their carbon footprints.|A service that helps people find eco-friendly products and services.|A website that provides information and resources on climate change.|A campaign that encourages people to take small steps to help combat climate change.|A fund that provides financial support to businesses and individuals who are working to mitigate climate change.\n\ncreate another 5 new unique startup or business ideas about art, other than what you made before:\nA subscription service that delivers a new piece of art to your door every month.|An art rental service that allows people to try out different pieces of art in their home before they buy.|An online gallery that specializes in selling affordable art.|A mobile app that helps people find art exhibits and events happening near them.|A blog that features interviews with artists, profiles of up-and-coming talent, and reviews of art exhibitions.\n\ncreate another 5 new unique startup or business ideas about "+query+", other than what you made before:\n",
        temperature: 0.9,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

    res.json({
        
        ...response.data.choices[0].text.split("|")
    });
    // console.log(response.data.choices.text) 
  }