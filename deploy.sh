PACKAGE_VERSION=$(cat ./package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

docker container kill sample-vue

docker build  -f "Dockerfile" -t arasksgl/sample-vue:$PACKAGE_VERSION .
docker run --rm -d -p 4000:4000/tcp --name=sample-vue arasksgl/sample-vue:$PACKAGE_VERSION