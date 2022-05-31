-- Input
-- Stephen Leitnick
-- October 10, 2021

--[=[
	@class Input

	The Input package provides access to various user input classes.

	- [PreferredInput](/api/PreferredInput)
	- [Mouse](/api/Mouse)
	- [Keyboard](/api/Keyboard)
	- [Touch](/api/Touch)
	- [Gamepad](/api/Gamepad)

	Require the desired input modules to get started:

	```lua
	local Input = require(Packages.Input)

	local PreferredInput = Input.PreferredInput
	local Mouse = Input.Mouse
	local Keyboard = Input.Keyboard
	local Touch = Input.Touch
	local Gamepad = Input.Gamepad
	```
]=]

return {
	PreferredInput = require(script.PreferredInput),
	Mouse = require(script.Mouse),
	Keyboard = require(script.Keyboard),
	Touch = require(script.Touch),
	Gamepad = require(script.Gamepad),
}
