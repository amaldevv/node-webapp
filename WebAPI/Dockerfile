FROM microsoft/aspnetcore

ENV ASPNETCORE_URLS = "http://*:9900"

EXPOSE 9900

WORKDIR /app
COPY ./publish .

CMD ["dotnet", "WebAPI.dll"]