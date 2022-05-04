"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8318],{49531:function(e){e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a ServerComm object. The `namespace` parameter is used\\nin cases where more than one ServerComm object may be bound\\nto the same object. Otherwise, a default namespace is used.\\n\\n```lua\\nlocal serverComm = ServerComm.new(game:GetService(\\"ReplicatedStorage\\"))\\n\\n-- If many might exist in the given parent, use a unique namespace:\\nlocal serverComm = ServerComm.new(game:GetService(\\"ReplicatedStorage\\"), \\"MyNamespace\\")\\n```","params":[{"name":"parent","desc":"","lua_type":"Instance"},{"name":"namespace","desc":"","lua_type":"string?"}],"returns":[{"desc":"","lua_type":"ServerComm"}],"function_type":"static","source":{"line":45,"path":"modules/comm/Server/ServerComm.lua"}},{"name":"BindFunction","desc":"Creates a RemoteFunction and binds the given function to it. Inbound\\nand outbound middleware can be applied if desired.\\n\\n```lua\\nlocal function GetSomething(player: Player)\\n\\treturn \\"Something\\"\\nend\\n\\nserverComm:BindFunction(\\"GetSomething\\", GetSomething)\\n```","params":[{"name":"name","desc":"","lua_type":"string"},{"name":"fn","desc":"","lua_type":"(player: Player, ...: any) -> ...: any"},{"name":"inboundMiddleware","desc":"","lua_type":"ServerMiddleware?"},{"name":"outboundMiddleware","desc":"","lua_type":"ServerMiddleware?"}],"returns":[{"desc":"","lua_type":"RemoteFunction"}],"function_type":"method","source":{"line":77,"path":"modules/comm/Server/ServerComm.lua"}},{"name":"WrapMethod","desc":"Binds a function to a table method. The name must match the\\nname of the method in the table. The same name will be used\\non the client to access the given function.\\n\\n```lua\\nlocal MyObject = {\\n\\t_Data = 10,\\n}\\n\\nfunction MyObject:GetData(player: Player)\\n\\treturn self._Data\\nend\\n\\nserverComm:WrapMethod(MyObject, \\"GetData\\")\\n```","params":[{"name":"tbl","desc":"","lua_type":"table"},{"name":"name","desc":"","lua_type":"string"},{"name":"inboundMiddleware","desc":"","lua_type":"ServerMiddleware?"},{"name":"outboundMiddleware","desc":"","lua_type":"ServerMiddleware?"}],"returns":[{"desc":"","lua_type":"RemoteFunction"}],"function_type":"method","source":{"line":104,"path":"modules/comm/Server/ServerComm.lua"}},{"name":"CreateSignal","desc":"Creates a signal that can be used to fire data to the clients\\nor receive data from the clients.\\n\\n```lua\\nlocal mySignal = serverComm:CreateSignal(\\"MySignal\\")\\n\\n-- Examples of firing in different ways (see docs for RemoteSignal for further info):\\nmySignal:Fire(somePlayer, \\"Hello world\\")\\nmySignal:FireAll(\\"Hi there\\")\\nmySignal:FireExcept(somePlayer, \\"Hello everyone except \\" .. somePlayer.Name)\\nmySignal:FireFilter(function(player) return player.Team == someCoolTeam end, \\"Hello cool team\\")\\n\\n-- Example of listening for clients to send data:\\nmySignal:Connect(function(player, message)\\n\\tprint(\\"Got a message from \\" .. player.Name .. \\":\\", message)\\nend)\\n```","params":[{"name":"name","desc":"","lua_type":"string"},{"name":"inboundMiddleware","desc":"","lua_type":"ServerMiddleware?"},{"name":"outboundMiddleware","desc":"","lua_type":"ServerMiddleware?"}],"returns":[{"desc":"","lua_type":"RemoteSignal"}],"function_type":"method","source":{"line":132,"path":"modules/comm/Server/ServerComm.lua"}},{"name":"CreateProperty","desc":"Create a property object which will replicate its property value to\\nthe clients. Optionally, specific clients can be targeted with\\ndifferent property values.\\n\\n```lua\\nlocal comm = Comm.ServerComm.new(game:GetService(\\"ReplicatedStorage\\"))\\n\\nlocal mapInfo = comm:CreateProperty(\\"MapInfo\\", {\\n\\tMapName = \\"TheAwesomeMap\\",\\n\\tMapDuration = 60,\\n})\\n\\n-- Change the data:\\nmapInfo:Set({\\n\\tMapName = \\"AnotherMap\\",\\n\\tMapDuration = 30,\\n})\\n\\n-- Change the data for one player:\\nmapInfo:SetFor(somePlayer, {\\n\\tMapName = \\"ASpecialMapForYou\\",\\n\\tMapDuration = 90,\\n})\\n\\n-- Change data based on a predicate function:\\nmapInfo:SetFilter(function(player)\\n\\treturn player.Team == game.Teams.SomeSpecialTeam\\nend, {\\n\\tMapName = \\"TeamMap\\",\\n\\tMapDuration = 20,\\n})\\n```","params":[{"name":"name","desc":"","lua_type":"string"},{"name":"initialValue","desc":"","lua_type":"any"},{"name":"inboundMiddleware","desc":"","lua_type":"ServerMiddleware?"},{"name":"outboundMiddleware","desc":"","lua_type":"ServerMiddleware?"}],"returns":[{"desc":"","lua_type":"RemoteProperty"}],"function_type":"method","source":{"line":176,"path":"modules/comm/Server/ServerComm.lua"}},{"name":"Destroy","desc":"Destroy the ServerComm object.","params":[],"returns":[],"function_type":"method","source":{"line":183,"path":"modules/comm/Server/ServerComm.lua"}}],"properties":[],"types":[{"name":"ServerMiddlewareFn","desc":"The middleware function takes the client player and the arguments (as a table array), and should\\nreturn `true|false` to indicate if the process should continue.\\n\\nIf returning `false`, the optional varargs after the `false` are used as the new return values\\nto whatever was calling the middleware.","lua_type":"(player: Player, args: {any}) -> (shouldContinue: boolean, ...: any)","source":{"line":26,"path":"modules/comm/Server/ServerComm.lua"}},{"name":"ServerMiddleware","desc":"Array of middleware functions.","lua_type":"{ServerMiddlewareFn}","source":{"line":31,"path":"modules/comm/Server/ServerComm.lua"}}],"name":"ServerComm","desc":"","realm":["Server"],"source":{"line":14,"path":"modules/comm/Server/ServerComm.lua"}}')}}]);