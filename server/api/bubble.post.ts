let bubbleSize = 0

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    
    console.log('POST body: ', body)

    if(body.inflate) {
      bubbleSize++
    }
    else {
      bubbleSize = 0
    }

    body.currentSize = bubbleSize

    console.log('bubbleSize: ', bubbleSize)

    return {
      currentSize: bubbleSize
    }
  })